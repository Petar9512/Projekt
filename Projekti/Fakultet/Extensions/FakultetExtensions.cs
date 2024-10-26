﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.Text;

namespace Fakultet.Extensions
{
    public static class FakultetExtensions
    {

        public static void AddFakultetSwaggerGen(this IServiceCollection Services)
        {
            // prilagodba za dokumentaciju, čitati https://medium.com/geekculture/customizing-swagger-in-asp-net-core-5-2c98d03cbe52

            Services.AddSwaggerGen(sgo =>
            { // sgo je instanca klase SwaggerGenOptions
              // čitati https://devintxcontent.blob.core.windows.net/showcontent/Speaker%20Presentations%20Fall%202017/Web%20API%20Best%20Practices.pdf
                var o = new Microsoft.OpenApi.Models.OpenApiInfo()
                {
                    Title = "Fakultet API",
                    Version = "v1",
                    Contact = new Microsoft.OpenApi.Models.OpenApiContact()
                    {
                        Email = "petarjelicic95@gmail.com",
                        Name = "Petar Jeličić"
                    },
                    Description = "Ovo je dokumentacija za Fakultet API",
                    License = new Microsoft.OpenApi.Models.OpenApiLicense()
                    {
                        Name = "Edukacijska licenca"
                    }
                };
                sgo.SwaggerDoc("v1", o);

                // SECURITY

                sgo.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Description = @"JWT Autorizacija radi tako da se prvo na ruti /api/v1/Autorizacija/token.  
                          autorizirate i dobijete token (bez navodnika). Upišite 'Bearer' [razmak] i dobiveni token.
                          Primjer: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2OTc3MTc2MjksImV4cCI6MTY5Nzc0NjQyOSwiaWF0IjoxNjk3NzE3NjI5fQ.PN7YPayllTrWESc6mdyp3XCQ1wp3FfDLZmka6_dAJsY'",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                sgo.AddSecurityRequirement(new OpenApiSecurityRequirement()
                  {
                        {
                          new OpenApiSecurityScheme
                          {
                            Reference = new OpenApiReference
                              {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                              },
                              Scheme = "oauth2",
                              Name = "Bearer",
                              In = ParameterLocation.Header,

                            },
                            new List<string>()
                          }
                    });

                // END SECURITY


            });

        }


        public static void AddFakultetCORS(this IServiceCollection Services)
        {
            // Svi se od svuda na sve moguće načine mogu spojitina naš API
            // Čitati https://code-maze.com/aspnetcore-webapi-best-practices/

            Services.AddCors(opcije =>
            {
                opcije.AddPolicy("CorsPolicy",
                    builder =>
                        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
                );

            });

        }


        public static void AddFakultetSecurity(this IServiceCollection Services)
        {
            // https://www.youtube.com/watch?v=mgeuh8k3I4g&ab_channel=NickChapsas
            Services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MojKljucKojijeJakoTajan i dovoljno dugačak da se može koristiti")),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = false
                };
            });
        }
    }
}