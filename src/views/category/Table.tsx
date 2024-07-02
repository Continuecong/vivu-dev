// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons'

// Third-party Imports
// import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'

type TableBodyRowType = {
  avatarSrc?: string
  name: string
  slug: string
  iconClass: string
  role: string
  status: string
}

// Vars
const rowsData: TableBodyRowType[] = [
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isHot'
  },
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isHot'
  },
  {
    avatarSrc: '/images/avatars/2.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isHot'
  },
  {
    avatarSrc: '/images/avatars/3.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isHot'
  },
  {
    avatarSrc: '/images/avatars/4.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isShow'
  },
  {
    avatarSrc: '/images/avatars/5.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isShow'
  },
  {
    avatarSrc: '/images/avatars/6.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isShow'
  },
  {
    avatarSrc: '/images/avatars/7.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isHot'
  },
  {
    avatarSrc: '/images/avatars/8.png',
    name: 'Ăn Uống',
    slug: 'an-uong',
    iconClass: 'text-primary',
    role: 'Admin',
    status: 'isHot'
  }
]

const Table = () => {
  return (
    <Card>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Slug</th>
              <th>Staus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map((row, index) => (
              <tr key={index}>
                <td className='!plb-1'>
                  <div className='flex items-center gap-3'>
                    <CustomAvatar src={row.avatarSrc} size={34} />
                    <div className='flex flex-col'>
                      <Typography color='text.primary' className='font-medium'>
                        {row.name}
                      </Typography>
                      <Typography variant='body2'></Typography>
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.slug}</Typography>
                </td>
                <td className='!pb-1'>
                  <Chip
                    className='capitalize'
                    variant='tonal'
                    color={row.status === 'isHot' ? 'warning' : row.status === 'inactive' ? 'secondary' : 'success'}
                    label={row.status}
                    size='small'
                  />
                </td>

                <td className='!plb-1'>
                  <div className='flex gap-4'>

                    <FontAwesomeIcon className='w-4'  icon={faPenToSquare} style={{color: "#B197FC",}} />
                    <FontAwesomeIcon className='w-4' icon={faTrash} style={{color: "#ff0000",}} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default Table
