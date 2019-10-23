import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import * as cfg from "../config/cfg";

class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer className={cfg.classes.footer} >
                <Typography variant="h6" align="center" gutterBottom>
                    Redes sociales
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Visitanos en nuestras redes:
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Distribuidora Arcor Villa Mercedes © 1991 - ' + (new Date().getFullYear())}
                    <br/>
                    <Link color="inherit" target={'_blank'} href="https://www.instagram.com/salondeventasarcor.vm/">
                        <i className={'fab fa-instagram'}></i> Instagram
                    </Link>
                    <br/>
                    <Link color="inherit" target={'_blank'} href="https://www.facebook.com/arcorcenter.vm/">
                        <i className={'fab fa-facebook'}></i> Facebook
                    </Link>
                </Typography>
            </footer>
        );
    }
}

export default Footer;