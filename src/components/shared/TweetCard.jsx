import { Tweet } from 'react-tweet';

export const TweetCard = ({ tweetId }) => {
  return (
    <div className="flex flex-col space-y-4">
      <h4 className="text-lg font-bold text-white/90 hover:text-white transition-colors duration-200">
        Latest Updates
      </h4>
      <div className="h-[220px] overflow-y-auto rounded-lg bg-neutral-800/50 p-4 scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-600 backdrop-blur-sm hover:bg-neutral-800/60 transition-colors duration-300">
        <div className="[&>div]:!min-w-0 [&_div.react-tweet]:!bg-transparent [&_div.react-tweet]:!p-0 [&_article]:!border-neutral-700 [&_article]:hover:border-neutral-600 [&_article]:transition-colors [&_article]:duration-300">
          <Tweet id={tweetId} />
        </div>
      </div>
    </div>
  );
};
