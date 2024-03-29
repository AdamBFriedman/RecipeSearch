import React, { Component } from "react";
import { recipe } from "../tempDetails";
export default class RecipeDetails extends Component {
/*constructor(props) {
  super(props);

  this.state = {
    recipe: recipe,
    url: `https://www.food2fork.com/api/get?key=b6fb5d86fb9419eeec1129a9e77a1ada&rId=${
      this.props.id
    }`
  };
}
async componentDidMount() {
  try {
    const data = await fetch(this.state.url);
    const jsonData = await data.json();
    this.setState({
      recipe: jsonData.recipe
    });
  } catch (error) {
    console.log(error);
  }
}*/
  state = {
    recipe: recipe
  };
  async componentDidMount() {
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?
    key=4751da772ff58e0e735a8ee946d5a15f&rId=${id}`;
    try {
      const data = await fetch(url, { mode: 'no-cors' });
      const jsonData = await data.json();
      this.setState(
        (state, props) => {
          return { recipe: jsonData.recipe };
        },
        () => {}
      );
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    const { handleIndex } = this.props;
    if (!ingredients) {
      return <h1>Loading...</h1>;
    }
    if (ingredients) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <button
                  type="button"
                  className="btn buttonSecondary mb-5 text-capitalize"
                  onClick={() => handleIndex(1)}
                >
                  Back to Recipe List
                </button>
                <img src={image_url} className="d-block w-100" alt="recipe" />
              </div>
              {/* details */}
              <div className="col-10 mx-auto col-md-6 my-3">
                <h6 className="text-uppercase text">{title}</h6>
                <h6 className="text-warning text-capitalize text">
                  Provided by: <strong>{publisher}</strong>
                </h6>
                <a
                  href={publisher_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2 text-capitalize"
                >
                  Publisher's Website
                </a>
                <a
                  href={source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn buttonSecondary mt-2 mx-3 text-capitalize"
                >
                  Recipe URL
                </a>
                <ul className="list-group mt-4">
                  <h2 className="mt-3 mb-4 text">Ingredients</h2>
                  {ingredients.map((item, index) => {
                    return (
                      <li key={index} className="list-group-item red">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
