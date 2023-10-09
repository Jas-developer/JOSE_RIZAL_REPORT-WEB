

type Props = {
     image:string;
     name:string;
     description?:string;
     }




export const Class = ({image,name,description ="description"}: Props) => {

    const overlayStyle = `p-8 absolute z-30 flex h-[380px] w-[450px] flex-col 
    items-center justify-center whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 `;


    return(
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
         <div className={overlayStyle}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5 px-4">{description}</p>
         </div>
         <img src={image} alt={image}  className="object-fill w-full"/>
        </li>
    )
}