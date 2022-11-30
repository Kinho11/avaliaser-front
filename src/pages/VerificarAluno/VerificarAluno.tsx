import { useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header';

export const VerificarAluno = () => {
  const { state } = useLocation();
  console.log(state)
  
  return (
    <>
      <Header />
    </>
  )
}
