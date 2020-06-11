<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      :span-method="spanMethod"
    >
      <el-table-column align="center" label="County" width="95">
        <template slot-scope="scope">
          {{ scope.row.county_name }}
        </template>
      </el-table-column>
      <el-table-column :label="headers.day0">
        <template slot-scope="scope">
          <weather-info :info="scope.row.day0" />
        </template>
      </el-table-column>
      <el-table-column :label="headers.day1">
        <template slot-scope="scope">
          <weather-info :info="scope.row.day1" />
        </template>
      </el-table-column>
      <el-table-column :label="headers.day2">
        <template slot-scope="scope">
          <weather-info :info="scope.row.day2" />
        </template>
      </el-table-column>
      <el-table-column :label="headers.day3">
        <template slot-scope="scope">
          <weather-info :info="scope.row.day3" />
        </template>
      </el-table-column>
      <el-table-column :label="headers.day4">
        <template slot-scope="scope">
          <weather-info :info="scope.row.day4" />
        </template>
      </el-table-column>
      <el-table-column :label="headers.day5">
        <template slot-scope="scope">
          <weather-info :info="scope.row.day5" />
        </template>
      </el-table-column>
      <el-table-column :label="headers.day6">
        <template slot-scope="scope">
          <weather-info :info="scope.row.day6" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/weatherRecord'
import WeatherInfo from '@/components/WeatherInfo'

export default {
  components: { WeatherInfo },
  data() {
    return {
      list: null,
      listLoading: true,
      headers: {
        day0: null,
        day1: null,
        day2: null,
        day3: null,
        day4: null,
        day5: null,
        day6: null
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data
        this.headers = this.getDates(this.list[0])
        this.listLoading = false
      })
    },
    getDates(records) {
      var dates = {}
      Object.keys(records).forEach((key, index) => {
        dates[key] = records[key].date
      })
      return dates
    },
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>
