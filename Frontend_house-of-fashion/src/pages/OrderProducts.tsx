import BuyProductCard from "../components/BuyProductCard"
import Spinner from "../components/common/Spinner"
import { CenterPage, PageWindow, The1440Window } from "../components/styled/pages.styles"
import { useGetAllBuyProductQuery } from "../redux/service/BuyProduct"

const OrderProducts = () => {
    const userId=localStorage.getItem('buyer_id')
    const {data , isFetching} = useGetAllBuyProductQuery({userId:Number(userId)})

    console.log('data products', data)
    console.log('isFetching', isFetching)

    return (
    <PageWindow mt={'0px'}>
        <The1440Window>
          <CenterPage>
    {
    isFetching ? <Spinner size='15px' type='dots' color='#0295F6'/> :
     data?.map((d)=> <BuyProductCard title={d?.title || ''} description={d?.description || ''}
     price={d?.price || 0} shipDate={d?.shipDate || ''} address={d?.address || ''}
 />) 
    }

</CenterPage>
</The1440Window>
</PageWindow>
  )
}

export default OrderProducts