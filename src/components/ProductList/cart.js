import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductCard from '../ProductCard/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledProductList from './styled';

function ShoppingCart() {
	const cartProducts = useStore(state => state.cartProducts);
	const deleteFromCart = useStore(state => state.deleteFromCart);

	return (
		<StyledProductList>
			{cartProducts.map(cartProduct => {
				return (
					<StyledProductCard key={cartProduct.id}>
						<Image
							alt={'Photo from the product'}
							src={cartProduct.imgUrl}
							width={100}
							height={100}
							layout="fixed"
						/>
						<StyledProductName>{cartProduct.name}</StyledProductName>
						<StyledProductPrice>{cartProduct.price}</StyledProductPrice>
						<StyledButton
							variant="delete"
							onClick={() => {
								deleteFromCart(cartProduct.id);
							}}
						>
							Delete
						</StyledButton>
					</StyledProductCard>
				);
			})}
		</StyledProductList>
	);
}

export default ShoppingCart;