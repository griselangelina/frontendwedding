
import React, { Component } from 'react';
import BrideGroomService from '../../Service/BrideGroomService';
import UserService from '../../Service/UserService';
import LoadingOverlay from 'react-loading-overlay';

import {Link} from 'react-router-dom';

class EditBrideGroom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editList:[],
            brideGroomEdit:'',
            loader: true,
        };
    }

    componentWillMount(){

        console.log("toleleee",UserService.getCurrentAccId)
        BrideGroomService.editList(UserService.getCurrentAccId).then( 
            (response) => {
                console.log("response", response.data.length);
                if(response.data.length > 0){
                const bridegroomcd=response.data[0]['brideGroomCd'];
                this.setState({editList:response.data,brideGroomEdit:bridegroomcd,loader:false});
                }
            },
		);
    }

    handleEditPage(){
        const {brideGroomEdit}=this.state;

        window.location.href ='/create?done='+brideGroomEdit;
    }

    handleChangeRadio(bridegroomcd){
        this.setState({
            brideGroomEdit: bridegroomcd
        });
    }

    render() {
    const { editList,loader}= this.state;

        return (
            <LoadingOverlay
            active={loader}
            spinner
            text={'noedit text'}
            >
            <div className="edit-body">
                <p>{editList.length > 0 ? 'Pilih website wedding yang ingin di edit.' : 'Tidak ada website yang bisa di edit'}</p>
                {
                    editList.map(p => 
                        <div class="edit-bridegroom" key={p.brideGroomCd}>
                            <input name={"editbridegroom"} value={p.name} type="radio" onChange={this.handleChangeRadio.bind(this,p.brideGroomCd)} />
                            <label>{p.name}</label>
                        </div>
                    )
                }
                {
                    editList.length > 0 && <div class="btn-edit" onClick={this.handleEditPage.bind(this)} >edit</div>
                }
            </div>
            </LoadingOverlay>
        );
    }
}




export default EditBrideGroom;