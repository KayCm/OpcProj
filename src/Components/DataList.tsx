import {View} from "react-native";
import {FlashList} from "@shopify/flash-list";
import {useInfiniteQuery, useQueryClient} from "@tanstack/react-query";
import {R_POST} from "../Services/NetRequestService";


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
    const currentPage = pageParam;
    const totalPages = 10;
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


export default function DataList({url,params,queryKey,renderHeader=null,renderRow=null,numColumns=1,estimatedItemSize=110}: any) {


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

    return(<View>

    </View>)
}
