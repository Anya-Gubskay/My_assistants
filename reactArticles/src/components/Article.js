import React, {PureComponent} from 'react'

// import App from "./App"

class Article extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

            count: 0
        }
    }
    // state = {
    //     isOpen: true
    // };
    //
    // shouldComponentUpdate(nextProps,nextState) {
    //     //Чаще всего, что бы не упустить какие-то изменения сравниваются все nextProps и все nextState
    //     //Для этого есть отдельный компонент вместо Component PureComponent у него уже реализован этот метод который
    //     // сравнивает все props и state. Этим он и отличается от Component. Но не стоит этим злоупотреблять, аа
    // ставить только там где это нужно!!!!!
    //     // Перед тем как зайти в  componentWillReceiveProps зreact зафдет сюда и посмотрит надо ли идти дальше если
    //     // true то да, если false то нет . Т.е. таким образом React построит дом только для первой статьи и
    //     // последней, для всех остальных строить не будет. Мы таким образом упрощаем жизнь реакту=)
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        // console.log ('mounting')
    }

    // componentWillReceiveProps (nextProps) {
    //     // Реакт заходит сюда когда родитель изменил props
    //     if(nextProps.defaultOpen !== this.props.defaultOpen) {
    //         this.setState ({
    //             isOpen: nextProps.defaultOpen
    //         })
    //     }
    // }

    componentWillUpdate (){
        // console.log("update")
    //  вызывается тогда когда изменет либо компонент либо родидитель либо и тоn и другое prors
    }

    componentWillUnmount() {
    //  для чистки нашего дома(почистить статьи, комментарии и т.д.
    //     console.log('delete')
    }

    render() {
        const {article , isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className="card-text">{article.text}</section>;
        return (
            <div className="card mx-auto" style={{width: '70%'}}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        count:{this.state.count}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Create date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState ({
            count: this.state.count + 1
        })
    }

}


// function Article(props) {
//     const {article} = props;
//     const body = <section>{article.text}</section>;
//     return (
//         <div className='hello' style = {{color: 'red'}}>
//             <h2>
//                 {article.title}
//                 <button onClick={handleClick}>close</button>
//             </h2>
//             {body}
//             <h3>Create date: {(new Date(article.date)).toDateString()}</h3>
//         </div>
//     )
// }

// function handleClick() {
//     console.log( 'clicked')
// }

export default Article