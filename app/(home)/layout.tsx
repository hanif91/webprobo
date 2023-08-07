import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';
import { toast } from 'react-hot-toast';
import { PostDataUprofile } from '@/types/userProfile';


async function getData() {
  const { userId } = auth();
  const userObj = await currentUser();
  const idEmailPrimary = userObj?.primaryEmailAddressId;
  const emailObj = userObj?.emailAddresses.find(
    (element) => element.id === idEmailPrimary
  );
  let phoneObj: any = {};
  let phonestr: any = '';
  
  if (userId) {
    
    if (!userObj?.primaryPhoneNumberId) {
      phonestr = '';
    } else {
      phoneObj = userObj?.phoneNumbers.find(
        (element) => element.id === userObj?.primaryPhoneNumberId
      );
      phonestr = phoneObj?.phoneNumber;
    }
    const postData: PostDataUprofile = {
      id: userObj?.id,
      email: emailObj?.emailAddress,
      name: `${userObj?.firstName} ${userObj?.lastName}`,
      nohp: phonestr,
      imageUrl: userObj?.imageUrl,
    };
  
    console.log(JSON.stringify(postData));
  

      const response = await fetch('/api/sign/create', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(postData),
      });

      if(!response.ok){
        console.log(response)
        throw new Error('Failed to fetch data')
      
      }

      return response.json()
  }
 
  return userId
}
 



export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // const data = await getData()
  // console.log(data)

  // setup kita load first active store  id  ,, dan cek setelah redireti user to dashboard root
  //atau jika ngk ada sama sekali , keep userid inside the root dan show modal create store
  return <>{children}</>;
}
