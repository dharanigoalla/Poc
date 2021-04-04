import React, {useEffect, useState} from 'react';
import {Paper, TextField, Button} from "@material-ui/core";
import s from './CartItem.css'
import useStyles from "isomorphic-style-loader/useStyles";
import Typography from "@material-ui/core/Typography";
import {Add, Remove, Cancel} from '@material-ui/icons'
import {useDispatch} from "react-redux";
import {changeProductQty, deleteItem} from "../../actions/cart";

function CartItem(props) {
  const {product, className} = props;
  const [qty, setQty] = useState(product.qty || 1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeProductQty(product.id, qty))

  }, [qty]);
  useStyles(s);
  return (
    <Paper variant="outlined" className={className}>
      <div className={s.container}>
        <div className={s.productInfo}>
          <img alt={product.desc || "product image"} src={product.img_url} height={200} width={200}/>
          <div className={s.productDesc}>
            <Typography gutterBottom variant="caption" component="h5">
              {product.desc}
            </Typography>
            <div className={s.qtyActions}>
              <Button startIcon={<Remove/>} onClick={() => setQty(qty => qty > 1 ? qty -1 : 1)}/>
            <TextField
              id="outlined-number"
              label="Qty"
              type="Qty"
              min={1}
              max={20}
              value={qty}
              onChange={(e) => {
                e.preventDefault();
                e.persist();
                setQty(e.target.value)
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
              <Button startIcon={<Add/>} onClick={() => {
                setQty(qty => qty + 1);
              }}/>
            </div>
            <Button startIcon={<Cancel/>} onClick={()=> dispatch(deleteItem(product.id))}>Remove</Button>
          </div>
        </div>
        <div>
          Rs{product.d_price * qty}
        </div>
      </div>

    </Paper>
  );
}

export default CartItem;
