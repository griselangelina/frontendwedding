import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';
import axios from 'axios';

class TemplateList extends Component {
    state = {
        template:[]
    }
    saveAndContinue = (e) => {
        const {dispatch,handleChangeTemplate}=this.props;
       //e.preventDefault()
       handleChangeTemplate(e)
        dispatch({type:'COMPOSE_NEXT',step:'BASIC_INFO'})
    }

    componentDidMount(){
        axios.get(`/api/get-template`)
        .then(res => {
          console.log("res",res.data)
          this.setState({template:res.data})
        })
      }

    render() {
        return (
            <div>
                <Navigation />
               
                <div class="section-title" >
                    <div class="container">
                        <p>
                            <h2>Pilih Desain</h2>
                            Buat website-mu dengan desain-desain template berikut.
                        </p>
                    </div>
                </div>
               

                <div class="section bg-color">
                <div class="container">
               

                  
                  <div class="row" >

                    {
                        this.state.template.map((val) => 
                        
                        <div class="col s12 m6 u-margin-top">
                            <div class="icon-block">
                                <a onClick={()=>this.saveAndContinue(val.id)} href="#">
                                    <img src={"/template/"+val.id+".png"} style={{width:`100%`}} />
                                </a>
                            </div>
                        </div>
                        )
                    }
                    


                  </div>

                </div>
              </div>


                <Footer />
            </div>

        );
    }
}

TemplateList.propTypes = {

};

const mapStateToProps = state => {
    return {
        step: state.listing.step,   
    }
}
export default connect(mapStateToProps)(TemplateList);