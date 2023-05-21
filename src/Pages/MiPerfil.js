import '../App.css'
import NavTabInfo from '../Components/NavTabInfo';

function MiPerfil() {

    var role = 'ALUMNO';
    return (
        <main className='container '>
            <div className='row'>
                <div className='col-4'>
                    <h3> Mi Perfil</h3>
                </div>
                <div className='col-8'>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-outline-primary me-md-2" type="button">Cancelar</button>
                        <button class="btn btn-primary" type="button">Guardar</button>
                    </div>
                </div>
            </div>
            <hr></hr>

            <h6>Informacion Personal</h6>
            <div className='row'>
                <div className='col-8'>

                    <div className='row' >
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" id="nameInput" placeholder=""></input>
                            <label for="nameInput">Nombres</label>
                        </div>

                        <div className="form-floating col-4">
                            <input type="text" className="form-control" id="lastNameInput" placeholder=""></input>
                            <label for="lastNameInput">Apellidos</label>
                        </div>

                        <div className="form-floating col-4">
                            <input type="text" className="form-control" id="documentTypeInput" placeholder=""></input>
                            <label for="documentTypeInput">Tipo de Documento</label>
                        </div>

                    </div>

                    <div className='row mt-3' >
                        <div className="form-floating col-4">
                            <input type="text" className="form-control" id="rolInput" placeholder=""></input>
                            <label for="rolInput">Rol</label>
                        </div>
                        {role === "PROFESOR"
                            ?
                            <div className=" col-4">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">d
                                        <option value="1">Bachiller</option>
                                        <option value="2">Magister</option>
                                        <option value="3">Doctor</option>
                                    </select>
                                    <label for="floatingSelect">Maximo grado alcanzado</label>
                                </div>
                            </div>

                            : <div className=" col-4">

                            </div>
                        }


                        <div className="form-floating col-4">
                            <input type="text" className="form-control" id="numberInput" placeholder=""></input>
                            <label for="numberInput">Numero</label>
                        </div>

                    </div>
                </div>
                <div className='col-4'>
                    <img src="https://media.istockphoto.com/id/157418797/es/foto/el-profesor.jpg?s=1024x1024&w=is&k=20&c=usanwEEySOx2FsOqpleCjcT6vOpUzMhwb7xkikE2j6E=" className="img-thumbnail mx-auto d-block" alt="..."></img>
                    <div className='text-center' ><a href=' ' className='text-decoration-none'><h6>Adjuntar Foto</h6></a></div>
                </div>
            </div>

            <NavTabInfo ></NavTabInfo>

        </main>
    )
}

export default MiPerfil;