import React, {Component} from 'react'
import ArticleList from './ArticleList/index'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

      state = {
          reverted: false
      };
      //записываем в локальную переменную, т.к. менять глобальные очень плохо-это может привести к дальнейшим
    // ошибкам в других компонентах
    //   articles = articles.slice();

    render() {
        console.log(2);
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App name
                        <button className="btn btn-warning btn-lg" onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                {/*Создаем копию не меняя при этом ориганльный массив и это правильно!!!Никогда не менять ничего что
                 приходит в PROPS глобальные, всегда создавайте локальный и копии и менять уже ее*/}
                <ArticleList articles={this.state.reverted ? articles.slice().reverse(): articles}/>
            </div>
        )
    }

    revert = () => {
        console.log(1);
        //Здесь если мы заходим отнаследоваться от ЗгкуСщьзщтуте то ничего не поменяется, поэтмоу правильно создать
        // новый массив в том порядке котором нам надо!!!!
        // this.articles.reverse();
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App