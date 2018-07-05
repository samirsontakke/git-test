import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedComment: null
        }
        
    }

    renderDish(){
        const dish=this.props.selectedDish
        if (dish != null){
            //this.renderComments(dish)
            return (  
                <div key={dish.id} className="col-12 col-md-5 m-1">              
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>  
                        <CardText>{dish.description}</CardText>          
                        {/* <CardText>{comment.comments[0].rating}</CardText> */}
                    </CardBody> 
                </Card> 
                <div>
                    <Card>
                        <CardText>
                    {this.renderComments(dish.comments)}
                        </CardText>
                    </Card>
                </div>
                </div>                  
            );
        }else{
            return (
                console.log(this.props.selectedDish)
            );
        }
    }
    renderComments(comments){
        comments.map((comment) => {
            return(
                <div key={comment.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardText>{comment.comment}</CardText>
                    </Card>
                </div>
            );
        })
        //console.log(comment[0].id)
        //this.setState({selectedComment: comment });
    }

    render(){
        
        return(
            <div className="container">
            <div className="row">
                    {this.renderDish()}
                   
            </div>
             {/* {this.renderComments(this.props.selectedDish)} */}
            </div>
        );  
    }
}
export default Dishdetail; 