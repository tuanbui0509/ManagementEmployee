using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Net.Http;
using System.Data;
using WebAPI.Models;
using System.Data.SqlClient;
using System.Configuration;

namespace WebAPI.Controllers
{
    public class EmployeeController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable dt = new DataTable();
            string query = @"
            select EmployeeID,EmployeeName,Department,MailID,convert(varchar(10),DOJ,120) from Employees";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(dt);
            }
            return Request.CreateResponse(HttpStatusCode.OK, dt);
        }
        public string Post(Employee e)
        {
            try
            {
                DataTable dt = new DataTable();
                //INSERT INTO dbo.Employees
                string query = @"
                                  INSERT INTO  dbo.Employees ( EmployeeName ,
                                  Department ,
                                  MailID ,
                                  DOJ
                                )
                                VALUES  ( '" + e.EmployeeName + @"','"
                                + e.Department + @"','" + e.MailID + @"',' " + e.DOJ + @"')";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["EmployeeAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(dt);
                }
                return "Thêm thành công";
            }
            catch (Exception ex)
            {
                Console.WriteLine("Loi nang: "+ex);
                return "Thêm thất bại";
            }
        }
    }
}

