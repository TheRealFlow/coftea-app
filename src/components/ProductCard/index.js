import Image from 'next/image';
import Link from 'next/link';

import SVG from '../../../public/SVG/svg';
import useStore from '../../hooks/useStore';
import StyledButton from '../Button/styled';
import ImageWrapper from '../ImageWrapper/styled';
import StyledProductName from '../ProductName/styled';
import StyledProductPrice from '../ProductPrice/styled';

import StyledProductCard from './styled';

export default function ProductCard({product}) {
	const changeQuantity = useStore(state => state.changeQuantity);
	const convert = Intl.NumberFormat('de-DE', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
	});
	return (
		<StyledProductCard category={product.category}>
			<ImageWrapper>
				<Image
					alt={product.alt}
					src={product.imgUrl}
					width={100}
					height={100}
					layout="responsive"
				/>
			</ImageWrapper>
			<StyledProductName>{product.name}</StyledProductName>
			<StyledProductPrice>{convert.format(product.price)}</StyledProductPrice>
			<Link href={`/product/${product.id}`} aria-label="Info Button">
				<a>
					<SVG size="30px" color="var(--accent-color)" variant="info" />
				</a>
			</Link>
			<StyledButton
				type="button"
				variant="default"
				onClick={() => {
					changeQuantity(product.id, 1);
				}}
			>
				Add to Cart
			</StyledButton>
		</StyledProductCard>
	);
}
