
//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'

// create a component
class MineScene extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/Mine/icon_navigationItem_set_white@2x.png')}
                    onPress={() => {

                    }}
                />
                <NavigationItem
                    icon={require('../../img/Home/icon_navigationItem_message_white@2x.png')}
                    onPress={() => {

                    }}
                />
            </View>
        ),
        headerStyle: { backgroundColor: color.theme },
    })

    state: {
        isRefreshing: boolean
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true })

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000);
    }

    renderCells() {
        let cells = []
        let dataList = this.getDataList()
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
                cells.push(cell)
            }
            cells.push(<SpacingView key={i} />)
        }

        return (
            <View style={{ flex: 1 }}>
                {cells}
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <Image style={styles.avatar} source={require('../../img/Mine/avatar.png')} />
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Heading1 style={{ color: 'white' }}>素敌</Heading1>
                            <Image style={{ marginLeft: 4 }} source={require('../../img/Mine/beauty_technician_v15@2x.png')} />
                        </View>
                        <Paragraph style={{ color: 'white', marginTop: 4 }}>个人信息 ></Paragraph>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.background }}>
                <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.theme }} />
                <ScrollView
                    style={{backgroundColor: color.background }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />

                    }>
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>

            </View>
        );
    }

    getDataList() {
        return (
            [
                [
                    { title: '银行卡', subtitle: '已绑定的银行卡', image: require('../../img/Mine/icon_mine_wallet@2x.png') }
                ],
                [
                    { title: '常用学员', image: require('../../img/Mine/icon_mine_friends@2x.png') }
                ],
                [
                    { title: '关于我们', subtitle: '我要合作', image: require('../../img/Mine/icon_mine_aboutmeituan@2x.png') }
                ]
            ]
        )
    }

}

// define your styles
const styles = StyleSheet.create({
    header: {
        backgroundColor: color.theme,
        paddingBottom: 20
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#0398FF'
    }
});

//make this component available to the app
export default MineScene;
