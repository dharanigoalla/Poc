import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import s from './HomeProductSection.css';
import useStyles from "isomorphic-style-loader/useStyles";
import {addItem} from "../../actions/cart";
import {useDispatch, useSelector} from "react-redux";
import Link from '../../components/Link';
import {AddShoppingCart} from '@material-ui/icons'

function HomeProductSection(props) {
  const {products = [], title} = props;
  const {cart: {items}} = useSelector(state => ({cart: state.cart}));
  const dispatch = useDispatch();
  useStyles(s);
  return (
    <section className={s.root}>
      <div className={s.container}>
        <Typography gutterBottom variant="h2" component="h2">{title}</Typography>
        <GridList className={s.gridList} cellHeight={400}>
          {products.map(product => (
            <GridListTile key={product.id} className={s.listItem}>
              <Card className={s.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product.desc}
                    image={product.img_url}
                    className={s.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent className={s.cardContent}>
                    <div>
                      <div className={s.priceContainer}>
                        <span className={s.discountedPrice}>
                         Rs. {product.d_price} &nbsp; &nbsp;
                        </span>
                        <span className={s.price}>
                          <strike>
                         Rs. {product.price}
                          </strike>
                        </span>
                        {!!product.d_off && (
                          <span className={s.discountOff}>
                            &nbsp; &nbsp;
                            {`(${product.d_off}% OFF)`}
                          </span>
                        )}
                      </div>
                      <Typography gutterBottom variant="h8" component="h5">
                        {product.desc}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  { !items.hasOwnProperty(product.id) ?
                    <Button
                      size="small"
                      color="secondary"
                      variant="contained"
                      className={s.cartAddBtn} onClick={() => dispatch(addItem(product))}
                      startIcon={<AddShoppingCart/>}
                    >
                    Add to Cart
                  </Button>
                    :
                      <Button
                        size="small"
                        color="warning"
                        variant="contained"
                        className={s.cartAddBtn}
                        startIcon={<AddShoppingCart/>}
                        component={Link}
                        to={'/cart'}
                      >
                        Checkout
                      </Button>
                  }
                </CardActions>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </section>
  );
}

export default HomeProductSection;
