import {Component} from 'react';

class Loading extends Component {
    render() {
        return (<div>loading</div>);
    }
}

function suspense(WrapComponent, func) {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                status: 'loading'
            };
            func()
                .then(() => {
                    this.setState({
                        status: 'fullfilled'
                    });
                })
                .catch(() => {
                    this.setState({
                        status: 'error'
                    });
                });
        }

        render() {
            const statusMap = {//map + 状态机
                error: <Error />,
                loading: <Loading />,
                fullfilled: <WrapComponent />
            };
            const RenderComponent = statusMap[this.state.status];
            return <RenderComponent />;
        }
    }
}