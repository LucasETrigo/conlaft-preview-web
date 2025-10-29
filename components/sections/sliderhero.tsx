import { InfiniteSlider } from '../ui/InfiniteSlider';

export function InfiniteSliderBasic() {
    return (
        <InfiniteSlider gap={43} reverse>
            <img
                src='/vica.png'
                alt='Vica Argentina Logo'
                className='h-[120px] w-auto grayscale'
            />
            <img
                src='/horacio.png'
                alt='Di Paolo y Borsini Sociedad Civil Contadores Logo'
                className='h-[120px] w-auto grayscale'
            />
            <img
                src='/austral.png'
                alt='Universidad Austral Logo'
                className='h-[120px] w-auto grayscale'
            />
            <img
                src='/UIF.png'
                alt='UIF Argentina Logo'
                className='h-[120px] w-auto grayscale'
            />
        </InfiniteSlider>
    );
}
