import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Axios from "axios";
import Footer from "./Footer";
import * as cfg from "../config/cfg";

class Album extends Component {

    componentDidMount() {
        // Make a request for a user with a given ID
        Axios.get('http://api.localdistri.com/api/products')
            .then(response => {
                let products = response.data.data;
                this.setState({products:products});
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
            .finally(() => {
            });

    }

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon className={cfg.classes.icon}/>
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <div className={cfg.classes.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Album layout
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
                            </Typography>
                            <div className={cfg.classes.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            Main call to action
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button variant="outlined" color="primary">
                                            Secondary action
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={cfg.classes.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {this.state.products.map(product => (
                                <Grid item key={product.id} xs={12} sm={6} md={4}>
                                    <Card className={cfg.classes.card}>
                                        <CardMedia
                                            component={'img'}
                                            className={cfg.classes.cardMedia}
                                            image={'http://api.localdistri.com/files/products/' + product.id + '/default.jpg'}
                                            title={product.name}
                                        />
                                        <CardContent className={cfg.classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {product.name}
                                            </Typography>
                                            <Typography>
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <Footer/>
                {/* End footer */}
            </React.Fragment>
        );
    }
}

export default Album;