import React, {Component} from 'react';
// import $ from 'jquery';
// import axios from 'axios';

class Pegawai extends Component {
    constructor() {
        super();
        this.state = {
            binner: 0,
            oktal : 0,
            desimal : 0,
            hexa : 0,
            konversi1: 0,
            konversi2: 0,
            konversi3: 0,
            konversi4: 0,
            hasildata1: 0,
            hasildata2: 0,
            hasildata3: 0,
            hasildata4: 0,
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
      }
    OperasiBinner = (event) => {
        event.preventDefault();
        let data = {
        binner: parseInt(this.state.binner),
        konversi1: parseInt(this.state.konversi1),
        }
        if(data.konversi1 === 0){
            this.setState({
                hasildata1: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi1 === 2){
            var octal = parseInt(data.binner, 2).toString(8);
            this.setState({
                hasildata1: octal
            })
        }else if(data.konversi1 === 3){
            var digit = parseInt(data.binner, 2);
            this.setState({
                hasildata1: digit
            })
        }else if(data.konversi1 === 4){
            var hexa = parseInt(data.binner, 2).toString(16).toUpperCase(); 
            this.setState({
                hasildata1: hexa
            })                
        }else{
            this.setState({
                hasildata1: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    OperasiOktal = (event) => {
        event.preventDefault();

        let data = {
        oktal: parseInt(this.state.oktal),
        konversi2: parseInt(this.state.konversi2),
        }

        if(data.konversi2 === 0){
            this.setState({
                hasildata2: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi2 === 1){
            var binner = parseInt(data.oktal, 8).toString(2);
            this.setState({
                hasildata2: binner
            })
        }else if(data.konversi2 === 3){
            var digit = parseInt(data.oktal, 8).toString(10);
            this.setState({
                hasildata2: digit
            })
        }else if(data.konversi2 === 4){
            var hexa = parseInt(data.oktal, 8).toString(16).toUpperCase(); 
            this.setState({
                hasildata2: hexa
            })                
        }else{
            this.setState({
                hasildata2: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    OperasiDesimal = (event) => {
        event.preventDefault();

        let data = {
        desimal: parseInt(this.state.desimal),
        konversi3: parseInt(this.state.konversi3),
        }

        if(data.konversi3 === 0){
            this.setState({
                hasildata3: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi3 === 1){
            var binner = parseInt(data.desimal, 10).toString(2);
            this.setState({
                hasildata3: binner
            })
        }else if(data.konversi3 === 2){
            var oktal = parseInt(data.desimal, 10).toString(8);
            this.setState({
                hasildata3: oktal
            })
        }else if(data.konversi3 === 4){
            var hexa = parseInt(data.desimal, 10).toString(16).toUpperCase(); 
            this.setState({
                hasildata3: hexa
            })                
        }else{
            this.setState({
                hasildata3: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    OperasiHexa = (event) => {
        event.preventDefault();

        let data = {
        hexa: this.state.hexa,
        konversi4: parseInt(this.state.konversi4),
        }

        if(data.konversi4 === 0){
            this.setState({
                hasildata4: "Tolong Pilih Konversi Dengan Benar"
            })
        }else if(data.konversi4 === 1){
            var binner = parseInt(data.hexa, 16).toString(2);
            this.setState({
                hasildata4: binner
            })
        }else if(data.konversi4 === 2){
            var oktal = parseInt(data.hexa, 16).toString(8);
            this.setState({
                hasildata4: oktal
            })
        }else if(data.konversi4 === 3){
            var digit = parseInt(data.hexa, 16).toString(10); 
            this.setState({
                hasildata4: digit
            })                
        }else{
            this.setState({
                hasildata4: "Terjadi Kesalahan, Mohon Maaf"
            })  
        }   

    }
    render(){
        return(
          <div className="container col-sm-6 -5">
            <center>
            <div className="padd">
                <div className="modal-content">
                <div className="alert alert-danger">  
                <h2 className="text">Konversi Bilangan Binner</h2>  
                    </div>
                    <form onSubmit={this.OperasiBinner}>  
                        <div className="modal-body">
                        <h4 className= "text">Binner</h4>
                            <input type="number" name="binner" className="form-control" value={this.state.binner} onChange={this.bind} required />
                            <br></br>
                            <h4 className= "text">Pilihan Konversi</h4>
                            <select  name="konversi1" className="form-control" value={this.state.konversi1} onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="2" >Oktal</option>
                                <option value="3">Desimal</option>
                                <option value="4">Heksadesimal</option>
                            </select>  
                        </div>  
                        <br></br>
                        <div class="d-grid gap-2 col-8 mx-auto">
                        <button class="btn btn-danger" type="submit">Convert</button>
                      </div>
                    </form>
                    <br></br>
                    <div className="alert alert-danger col-9 d-grid gap-2 mx-auto">
                        <strong><center>{this.state.hasildata1}</center></strong> 
                    </div>
                    {/* <div className="alert alert-success">
                        <strong><center>{this.state.hasildata}</center></strong> 
                    </div> */}
                </div>
                </div>

                <div className="padd">
                <div className="modal-content">
                <div className="alert alert-danger">  
                <h2 className="text">Konversi Bilangan Oktal</h2>  
                    </div>
                    <form onSubmit={this.OperasiOktal}>  
                        <div className="modal-body">
                            <h4 className="text">Oktal</h4>
                            <input type="number" name="oktal"  
                            className="form-control" value={this.state.oktal} onChange={this.bind} required />
                            <br></br>
                            <h4 className="text">Pilihan Konversi</h4>
                            <select  name="konversi2" className="form-control" value={this.state.konversi2}onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="1" >Binner</option>
                                <option value="3">Desimal</option>
                                <option value="4">Heksadesimal</option>
                            </select>  
                        </div> 
                        <br></br> 
                        <div class="d-grid gap-2 col-8 mx-auto">
                        <button class="btn btn-danger" type="submit">Convert</button>
                      </div>
                    </form>
                    <br></br>
                    <div className="alert alert-danger col-9 d-grid gap-2 mx-auto">
                        <strong><center>{this.state.hasildata1}</center></strong> 
                    </div>
                    {/* <div className="alert alert-success">
                        <strong><center>{this.state.hasildata}</center></strong> 
                    </div> */}
                </div>
                </div>

                <div className="padd">
                <div className="modal-content">
                <div className="alert alert-danger">  
                <h2 className="text">Konversi Bilangan Desimal</h2>  
                    </div>
                    <form onSubmit={this.OperasiDesimal}>  
                        <div className="modal-body">
                            <h4 className="text">Desimal</h4>
                            <input type="number" name="desimal" className="form-control" value={this.state.desimal} onChange={this.bind} required />
                            <br></br>
                            <h4 className="text">Pilihan Konversi</h4>
                            <select  name="konversi3" className="form-control" value={this.state.konversi3} onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="1" >Binner</option>
                                <option value="2">oktal</option>
                                <option value="4">Heksadesimal</option>
                            </select>  
                        </div>  
                        <br></br>
                        <div class="d-grid gap-2 col-8 mx-auto">
                        <button class="btn btn-danger" type="submit">Convert</button>
                      </div>
                    </form>
                    <br></br>
                    <div className="alert alert-danger col-9 d-grid gap-2 mx-auto">
                        <strong><center>{this.state.hasildata1}</center></strong> 
                    </div>
                    {/* <div className="alert alert-success">
                        <strong><center>{this.state.hasildata}</center></strong> 
                    </div> */}
                </div>
                </div>

                <div className="padd">
                <div className="modal-content">
                <div className="alert alert-danger">  
                <h2 className="text">Konversi Bilangan Heksadesimal</h2>  
                    </div>
                    <form onSubmit={this.OperasiHexa}>  
                        <div className="modal-body">
                            <h4 className="text">Heksadesimal</h4>
                            <input type="text" name="hexa" className="form-control" value={this.state.hexa} onChange={this.bind} required />
                            <br></br>
                            <h4 className="text">Pilihan Konversi</h4>
                            <select  name="konversi4" className="form-control" value={this.state.konversi4}
                            onChange={this.bind}>
                                <option value="0" >Pilih Konversi</option>
                                <option value="1" >Binner</option>
                                <option value="2">oktal</option>
                                <option value="3">Desimal</option>
                            </select>  
                        </div>
                        <br></br>  
                        <div class="d-grid gap-2 col-8 mx-auto">
                        <button class="btn btn-danger" type="submit">Convert</button>
                      </div>
                    </form>
                    <br></br>
                    <div className="alert alert-danger col-9 d-grid gap-2 mx-auto">
                        <strong><center>{this.state.hasildata1}</center></strong> 
                    </div>
                    {/* <div className="alert alert-success">
                        <strong><center>{this.state.hasildata}</center></strong> 
                    </div> */}
                </div>
                </div>
                </center>
            </div>  
            
        );
    }
}
export default Pegawai;