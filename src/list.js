import React, { Component } from 'react';

var contactList = [
    {
        id: 1,
        name: 'first',
        img: 'http://twt-thumbs.washtimes.com/media/image/2015/12/02/01b_c22-0-1078-616_s326x190.jpg?75e8e396ef15931b61fe538d87ab0154959fc6c3'
    }, {
        id: 2,
        name: 'second',
        img: 'http://img2.rnkr-static.com/user_node_img/50047/1000931279/870/millennium-falcon-photo-u1.jpg'
    }, {
        id: 3,
        name: 'third',
        img: 'http://www.niubniubsuniverse.com/FigReviews/POTF2Reviews_Ships/POTF2Ships/SnowSpeeder.jpg'
    }
];
class Contact extends Component {
    render() {
        return <li>
            <img src={this.props.img} width="200px" height="200px"  />
            <div> {this.props.name} </div>
            
        </li>;
    }
}
class List extends Component {
    constructor() {
        super(contactList);
        this.state = {displayedContact: contactList};
    }
    searchShip(event){
        var serchQuery = event.target.value.toLowerCase();
        var displayedContact = contactList.filter( function(el) {
                var searchValue = el.name.toLowerCase();
                return searchValue.indexOf(serchQuery) !== -1;
            });
        this.setState({displayedContact: displayedContact});
    }
    render() {
        return(
            <div>
                <input type="text" onChange={this.searchShip} />
                <ul>
                    {
                        this.state.displayedContact.map(function(el){
                            return <Contact key={el.id} name={el.name} img={el.img} />
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default List;
