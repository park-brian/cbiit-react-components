import React from 'react';
import './nci-footer.scss';

export const defaultSections = {
    
}

export function NCIFooter({
    supportEmail = 'NCIinfo@nih.gov'
}) {

    return <footer className="bg-primary-dark text-light py-4"> 
        <div className="container">
            <div className="row mb-3">
                <div className="col">
                    <div className="h4 mb-0">National Cancer Institute</div>
                    <div className="h6">at the National Institutes of Health</div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md">
                    <div className="h4 font-weight-light">COLUMN 1</div>
                    <ul className="footer-links">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
                <div className="col-md">
                    <div className="h4 font-weight-light">COLUMN 2</div>
                    <ul className="footer-links">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
                <div className="col-md">
                    <div className="h4 font-weight-light">COLUMN 3</div>
                    <ul className="footer-links">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>

                <div className="col-md">
                    <div className="h4 font-weight-light">COLUMN 4</div>
                    <ul className="footer-links">
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>                
            </div>
        </div>    

        <div className="text-center">
            <ul className="footer-links inline">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>

            NIH ... Turning Discovery Into Health ®
        </div>
    </footer>
}