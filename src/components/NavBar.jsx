/* eslint-disable jsx-a11y/anchor-is-valid */

const NavBar = () => {
    return (
        <div class="cointainer-fluid">
            <nav class="navbar fixed-top">
                <div class="container-fluid">
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/pages/tienda.html">Tienda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/pages/encontranos.html">Encontranos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/pages/acercanosotros.html">Acerca De Nosotros</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/pages/contacto.html">Contacto</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Iniciar Sesion
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default NavBar;