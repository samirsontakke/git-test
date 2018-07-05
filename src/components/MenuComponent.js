import React, { Component} from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle } from 'reactstrap'
import Dishdetail from './DishdetailComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish: null
        }       
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    render(){
        const menu= this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        {/* <Media tag="li">
                            <Media left middle>
                                <Media object src={dish.image} alt={dish.name} />
                            </Media>
                        </Media> */}
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        {/* <Media className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media> */}
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail selectedDish={this.state.selectedDish}/>
                    {/* {this.renderDish(this.state.selectedDish)} */}
            </div>
        );
    }
}

export default Menu;