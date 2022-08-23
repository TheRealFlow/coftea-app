import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledCartItem from './styled';

export default function CartItem({productid, id, imgUrl, name, price}) {
	const deleteFromCart = useStore(state => state.deleteFromCart);

	return (
		<StyledCartItem key={id}>
			<Image
				alt={'Photo from the product'}
				src={imgUrl}
				width={100}
				height={100}
				layout="fixed"
			/>
			<StyledProductName>{name}</StyledProductName>
			<StyledProductPrice>{price}</StyledProductPrice>
			<StyledButton
				variant="delete"
				onClick={() => {
					deleteFromCart(productid);
				}}
			>
				Delete
			</StyledButton>
		</StyledCartItem>
	);
}
