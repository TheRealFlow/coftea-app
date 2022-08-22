import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledProductCard from './styled';

export default function ProductCard({id, name, price, imgUrl, product}) {
	const addToCart = useStore(state => state.addToCart);

	return (
		<StyledProductCard key={id}>
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
				variant="default"
				onClick={() => {
					addToCart({product});
				}}
			>
				Add To Cart
			</StyledButton>
		</StyledProductCard>
	);
}
