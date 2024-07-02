
import Grid from '@mui/material/Grid'

import Table from '@/views/category/Table'

import FormLayoutsBasic from '@views/form-layouts/FormLayoutsBasic'

const CategoryPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <FormLayoutsBasic />
        <Table />
      </Grid>
    </Grid>
  )
}

export default CategoryPage
