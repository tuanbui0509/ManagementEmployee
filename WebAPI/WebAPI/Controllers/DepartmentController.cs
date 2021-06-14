using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class DepartmentController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable dt = new DataTable();
            string query = @"
            SELECT DepartmentID,DepartmentName 
            FROM Departments";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }
            return Request.CreateResponse(HttpStatusCode.OK, dt);
        }
        public string Post(Department dep)
        {
            try
            {
                DataTable dt = new DataTable();
                string query = @"
                                   INSERT INTO dbo.Departments VALUES  ( '" + dep.DepartmentName + @"' )";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(dt);
                }
                return "Thêm thành công";
            }
            catch (Exception)
            {

                return "Thêm thất bại";
            }
        }

        public string Put(Department dep)
        {
            try
            {
                DataTable dt = new DataTable();
                string query = @"UPDATE dbo.Departments SET DepartmentName = '" + dep.DepartmentName + @"' WHERE DepartmentID = '" + dep.DepartmentID + @"'";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(dt);
                }
                return "Sửa thành công";
            }
            catch (Exception)
            {
                return "Sửa thất bại?";
            }
        }

        public string Delete(int id)
        {
            try
            {
                DataTable dt = new DataTable();
                string query = @"DELETE dbo.Departments WHERE DepartmentID = '" + id + @"'";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(dt);
                }
                return "Xóa thành công";
            }
            catch (Exception)
            {
                return "Xóa thất bại?";
            }

        }
    }
}
