// index.js
<Provider store={store}>
    <React.StrictMode>
      <App />
      <Comp />
    </React.StrictMode>
</Provider>


// app.js
class APP extends React.Component {  
    constructor(props) {    
        super(props)    
    }  
    handleAddItem = () => {
        const {dispatch} = this.props;
        dispatch({
            type: `${namespace}/ADD_ITEM`,
            text: 2
        })
    }
    handleDelItem = () => {
        const {dispatch} = this.props;
        dispatch({
            type: `${namespace}/DEL_ITEM`,
            text: 2
        })
    }
    render() {
        const {comp} = this.props;
        const {list} = comp;
        return (
            <div>
                <ul>
                    {
                        list.map(i => {
                            return <li>{i}</li>
                        })
                    }
                </ul>
                <button onClick={this.handleAddItem}>add li</button>
                <button onClick={this.handleDelItem}>del li</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        comp: state.comp
    }
}
function mapDispatchToProps(dispatch){
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(APP);