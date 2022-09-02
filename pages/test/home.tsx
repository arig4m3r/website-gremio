type Props = {
  buildTimestamp: any;
};

const Home = ({ buildTimestamp }: Props) => {
  return <p>Hello From my next.js app! App built at: {buildTimestamp}</p>;
};

export const getStaticProps = () => {
  return {
    props: {
      buildTimestamp: Date.now(),
    },
  };
};

export default Home;
