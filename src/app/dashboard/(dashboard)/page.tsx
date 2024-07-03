'use client'
import Grid from '@mui/material/Grid'

// Components Imports
import { Provider } from 'react-redux'

import Award from '@views/dashboard/Award'
import Transactions from '@views/dashboard/Transactions'

// import CustomEditor from '@/components/ckeditor/custom-editor'

// import WeeklyOverview from '@views/dashboard/WeeklyOverview'
// import TotalEarning from '@views/dashboard/TotalEarning'
// import LineChart from '@views/dashboard/LineChart'
// import DistributedColumnChart from '@views/dashboard/DistributedColumnChart'
// import DepositWithdraw from '@views/dashboard/DepositWithdraw'
// import SalesByCountries from '@views/dashboard/SalesByCountries'
// import CardStatVertical from '@components/card-statistics/Vertical'
import Table from '@views/dashboard/Table'


import { store } from '@/provider/store'

const Dashboard = () => {
  return (
    <Provider store={store}>
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <Transactions />
      </Grid>
      <Grid item xs={12}>
        <div className="my-4">

      {/* <CustomEditor /> */}
        </div>
        <Table />
      </Grid>
    </Grid>
    </Provider>
  )
}

export default Dashboard
