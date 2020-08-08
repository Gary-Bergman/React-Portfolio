import React from "react";


function FooterNav() {
    return (
        <>
            <footer>
                <nav class="fixed-bottom mt-5 navbar navbar-expand-lg navbar-light bg-light">
                    <figure class="container footerIcons">
                        <section class="row mx-auto">
                            {/* <!-- Github --> */}
                            <a class="col pr-5" href="https://github.com/Gary-Bergman" target="_blank"><i class="fa fa-github"
                                aria-hidden="true"></i></a>
                            {/* <!-- Email --> */}
                            <a class="col x-5" href="mailto:garybergman00@gmail.com" target="_blank"><i class="fa fa-envelope"
                                aria-hidden="true"></i></a>
                            {/* <!-- LinkedIn --> */}
                            <a class="col pl-5" href="https://www.linkedin.com/in/gary-bergman/" target="_blank"><i
                                class="fa fa-linkedin" aria-hidden="true"></i></a>
                            {/* <!-- Phone --> */}
                            <a class="col pl-5" href="mailto:479-715-1009" target="_blank"><i class="fa fa-phone"
                                aria-hidden="true"></i></a>
                            {/* <!-- Resume --> */}
                            <a class="col pl-5"
                                href="https://drive.google.com/file/d/1HZU6OWLzWQNUQhQZbd7WZihXW6MoJPkH/view?usp=sharing"
                                target="_blank"><i class="fa fa-file-text-o" aria-hidden="true"></i></a>

                        </section>
                    </figure>
                </nav>
            </footer>
        </>
    )
}
export default FooterNav;