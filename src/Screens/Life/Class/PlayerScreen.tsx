import {View,Text} from "react-native";
import { Tabs } from 'react-native-collapsible-tab';
import {Header, MenuBar, renderRow} from "./Component";


export default function PlayerScreen() {

    return(<View style={{flex:1,}}>



        <Tabs.Container renderHeader={() => <Header />}  renderTabBar={()=><MenuBar />}>
            <Tabs.Tab name="posts" label="Posts">
                <Tabs.FlatList data={[1,2,3,4,5,6,7,8,8,9,9,9,9,9,99,9,9,9,9,9]} renderItem={renderRow} />
            </Tabs.Tab>
            <Tabs.Tab name="about" label="About">
                <Tabs.ScrollView>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                    <Text>123123</Text>
                </Tabs.ScrollView>
            </Tabs.Tab>
        </Tabs.Container>

    </View>)
}
