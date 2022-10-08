import Card from "./Card";

const CardSection = () => {
    return ( 
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:m-5 md:m-16">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        

        </div>
     );
}
 
export default CardSection;