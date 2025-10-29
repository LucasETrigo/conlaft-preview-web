import {
    ImageComparison,
    ImageComparisonImage,
    ImageComparisonSlider,
} from '../ui/ImageComparison';

export function ImageComparisonSpring() {
    return (
        <ImageComparison
            className='aspect-[16/10] w-full rounded-lg border border-zinc-200 dark:border-zinc-800'
            enableHover
            springOptions={{
                bounce: 0.3,
            }}
        >
            <ImageComparisonImage
                src='/heroimg.jpg'
                alt='Motion Primitives Dark'
                position='left'
            />
            <ImageComparisonImage
                src='/heroimg2.jpg'
                alt='Motion Primitives Light'
                position='right'
            />
            <ImageComparisonSlider className='w-0.5 bg-white/30 backdrop-blur-sm' />
        </ImageComparison>
    );
}
