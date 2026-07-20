import {View, Text, RefreshControl} from "react-native";
import {FlashList} from "@shopify/flash-list";
import {useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import {R_POST} from "../Services/NetRequestService";
import {useCallback, useMemo} from "react";

const OptimizedFlashList = FlashList as any;

export interface Item {
    id: string;
    title: string;
}

interface PageData {
    data: Item[];
    nextPage: number | null;
    totalPages: number;
}

const fetchItems = async ({ pageParam = 1,url ,params}: any): Promise<PageData> => {
    const response: any = await R_POST(url, {pageNum: pageParam, pageSize: 10, ...params});
    if (response.code != 200) throw new Error('Network response was not ok');
    const data = response.data

    // console.log("data===>")
    // console.log(data)
    // console.log("response===>")
    // console.log(response.total)

    const currentPage = pageParam;
    const totalPages = Math.ceil(response.total/10);
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;
    return {
        data,
        nextPage,
        totalPages,
    };
}


const useInfiniteItems = ({url,params,queryKey}: any) => {
    return useInfiniteQuery({
        queryKey: [queryKey],
        queryFn:({ pageParam = 1 }) =>  fetchItems({pageParam,url,params}),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextPage,
        staleTime: 10000, // 5 分钟内数据视为新鲜
        gcTime: 10 * 60 * 1000,   // 缓存保留 10 分钟
    });
};


export default function DataList({url,params,queryKey,renderHeader=null,renderRow=null,renderEmpty=null,numColumns=1,estimatedItemSize=110,onScroll,style}: any) {


    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
        refetch,
    } = useInfiniteItems({url,params,queryKey});

    const queryClient = useQueryClient()

    const allItems = useMemo(
        () => data?.pages.flatMap((page) => page.data) ?? [],
        [data?.pages],
    );

    // 加载更多
    const loadMore = useCallback(() => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    // 列表底部：加载更多指示器 或 无更多数据提示
    const renderFooter = useCallback(() => {
        if (!hasNextPage && allItems.length > 0) {
            return (
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#8a8a8a'}}>—— 没有更多 ——</Text>
                </View>
            );
        }
        if (isFetchingNextPage) {
            return (
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    {/*<ActivityIndicator size="small" />*/}
                    <Text style={{color:'#8a8a8a'}}>加载更多...</Text>
                </View>
            );
        }
        return null;
    }, [allItems.length, hasNextPage, isFetchingNextPage]);

    const handleRefresh = useCallback(() => {
        queryClient.setQueryData([queryKey], (data: any) => {
            if (!data?.pages || !data?.pageParams) return data;
            return {
                pages: data.pages.slice(0, 1),
                pageParams: data.pageParams.slice(0, 1),
            };
        })
        queryClient.invalidateQueries({queryKey: [queryKey]})
    }, [queryClient, queryKey]);


    if (error) return <Text>An error occurred: {error.message}</Text>;


    return (
        <OptimizedFlashList
            data={allItems}
            renderItem={renderRow}
            // keyExtractor={(item) => item.id}
            keyExtractor={(_: any, index: number) => index.toString()}
            onEndReached={loadMore}
            numColumns={numColumns}
            onEndReachedThreshold={0.5}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={110} // 预估每个列表项的高度，务必根据实际内容调整
            refreshControl={<RefreshControl refreshing={isLoading}
                                            progressBackgroundColor={'#fff'}
                                            onRefresh={handleRefresh}
            />}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={renderEmpty}
            style={[{flex:1},style]}
            onScroll={onScroll}
            contentContainerStyle={{width: '100%',}}
        />
    );

}
