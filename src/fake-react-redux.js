/**
 * @file custom react-redux
 * @author jessie
*/
import React, {Component} from 'react';

const createContext = () => {
    return React.createContext(null);
};
const ReduxContext = createContext();
/**
 * @class Provider外层组件，获取store
*/
export class Provider extends Component {

    render() {
        console.log('this.props.children:::', this.props.children);
        const store = this.props.store;
        return <ReduxContext.Provider value={store}>
            {this.props.children}
        </ReduxContext.Provider>;
    }
}
/**
 * 连接器方法，接受映射方法，返回HOC
 * @param {Function} [mapStateToProps] - 映射store上的state到props
 * @param {Function} [mapDispatchToProps] - 映射store上的dispatch到props
 * @param {React.Component} [ConnectComponent] - 需要HOC装饰的组件
 * @return {React.Component} - 装饰后的方法
*/
export const connect = (mapStateToProps, mapDispatchToProps) => {
    return ConnectComponent => {
        return class extends Component {

            constructor(props) {
                super(props);
                this.state = {
                    mergedProps: null
                };
            }

            componentDidMount() {
                const store = this.context;
                store.subscribe(() => {
                    // console.log('getState:::', store.getState());
                    const mergedProps = this.computeProps(store);
                    if(mergedProps !== this.state.mergedProps) {
                        this.setState({mergedProps});
                    }  
                });
            }

            static contextType = ReduxContext;

            computeProps(store) {
                const stateProps = mapStateToProps(store.getState());
                //用箭头函数将store.dispatch包装一下，防止dispatch丢this
                //防止丢this的方式：1.箭头函数；2.bind一下；
                const eventProps = mapDispatchToProps((...args) => store.dispatch(...args));
                //把上面的两个props merge一下
                return {...stateProps, ...eventProps};
            }

            render() {
                console.log('i got:::', this.context);
                const mergedProps = this.state.mergedProps || this.computeProps(this.context);
                return (<ConnectComponent {...mergedProps} {...this.props}/>);
            }
        }
    }
};