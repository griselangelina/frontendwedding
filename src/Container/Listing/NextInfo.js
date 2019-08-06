import React, { Component } from 'react';
import { Navigation,Footer,Banner } from '../../Components/Molecules';
import { connect } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

class NextInfo extends Component {
    
    back = (e) => {
        const {dispatch}=this.props;
        e.preventDefault()
        dispatch({type:'COMPOSE_NEXT',step:'MESSAGE_INFO_NEXT'})
    }

    render() {
        const { values, handleChange,submit,handleFileChosen,loader } = this.props;
        console.log("lohhh",values)
        return (
            <LoadingOverlay
            active={loader}
            spinner
            text='Loading your content...'
            >
            <div class="">
                 <div class="container">
                 <i class="small material-icons" onClick={this.back}>arrow_back</i>

                 <p>
                    <h3>Step - Terakhir</h3>
                    Isikan data yang diperlukan di bawah ini.
                </p>
                    <div class="row">
                    </div>
                    <div class="row" >
                        <div class="col s12 m5 ">
                            <div class="icon-block">
                            <img src={"/template/"+values.templateId.value+".png"} style={{width:`100%`}} />
                            </div>
                        </div>
                        <div class="col s12 m7 bg-color">
                            <div class="input-field col s12">
                                <textarea id="quotes" class="materialize-textarea"  value={values.ourStory1.value} onChange={handleChange('ourStory1')}></textarea>
                                <label for="quotes" class={values.ourStory1.value ? 'active' : ''}>Quotes</label>
                            </div>
                            <div class="input-field col s12">
                                <textarea id="story" class="materialize-textarea"  value={values.ourStory2.value} onChange={handleChange('ourStory2')}></textarea>
                                <label for="story" class={values.ourStory2.value ? 'active' : ''}>Groom/Bride Story</label>
                            </div>
                            <div class="input-field col s12" style={{height:`300px`}}>
                                <div class="file-field input-field">
                                    <div class="btn col s3">
                                        <span>Upload Picture</span>
                                        <input type="file" name="headerPicture" accept=".png" onChange={e=>handleFileChosen(e.target.files[0])}/>
                                    </div>
                                   
                                    <div class="file-path-wrapper">
                                        <div class="file-image">
                                            <img class="image" src={values.headerPicture.value}/>
                                        </div>
                                    </div>
                                     
                                </div>
                            </div>
                          
                            <div class="input-field col s12">    
                                <a class="waves-effect main-color btn u-wid-100" onClick={()=>submit()}>Submit</a>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            <Footer/>
            </LoadingOverlay>
        );
    }
}

NextInfo.propTypes = {

};

const mapStateToProps = state => {
    return {
        step: state.listing.step,   
    }
}
export default connect(mapStateToProps)(NextInfo);