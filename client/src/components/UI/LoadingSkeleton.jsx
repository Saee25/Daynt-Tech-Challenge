import { Skeleton, Box } from '@mui/material';

const LoadingSkeleton = () => {
  return (
    <Box className="space-y-4">
      <Box className="flex gap-4 mb-6">
        <Skeleton variant="rectangular" width={150} height={40} />
        <Skeleton variant="rectangular" width={200} height={40} />
      </Box>

      {[...Array(5)].map((_, index) => (
        <Box key={index} className="flex gap-4 items-center">
          <Skeleton variant="rectangular" width="25%" height={40} />
          <Skeleton variant="rectangular" width="15%" height={40} />
          <Skeleton variant="rectangular" width="25%" height={40} />
          <Skeleton variant="rectangular" width="20%" height={40} />
          <Skeleton variant="rectangular" width="15%" height={40} />
        </Box>
      ))}
    </Box>
  );
};

export default LoadingSkeleton;