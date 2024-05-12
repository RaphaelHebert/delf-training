import ProfilButton from './ProfilButton'

const Header: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <ProfilButton />
    </div>
  )
}
export default Header
