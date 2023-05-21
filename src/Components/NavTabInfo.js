import '../App.css'


const NavTabInfo = (props) => {

    return (
        <main>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Datos de Usuario</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Universidad</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Presentacion</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div className='container'>
                        <div className='col-8'>
                            <div className=' row mt-3' >
                                <div className="form-floating col-4">
                                    <input type="text" className="form-control" id="userInput" placeholder=""></input>
                                    <label for="userInput">Usuario</label>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="currentInput" placeholder=""></input>
                                    <label for="currentInput">Contraseña Actual</label>
                                </div>

                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="newPassInput" placeholder=""></input>
                                    <label for="newPassInput">Nueva Contraseña</label>
                                </div>

                                <div className="form-floating col-4">
                                    <input type="password" className="form-control" id="repPassInput" placeholder=""></input>
                                    <label for="repPassInput">Repetir Contraseña</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    <div className='container'>
                        <div className='row mt-3'>
                            <div className="form-floating input-group-lg">
                                <input type="text" className="form-control" id="titleInput" placeholder=""></input>
                                <label for="titleInput">Titulo</label>
                            </div>
                        </div>

                        <div className='row mt-3'>
                            <div className="form-floating input-group-lg">
                                <input type="text" className="form-control" id="presentationInput" placeholder=""></input>
                                <label for="presentationInput">Presentacion</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default NavTabInfo;