import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import javax.servlet.Filter
import javax.servlet.FilterChain
import javax.servlet.FilterConfig
import javax.servlet.ServletException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Configuration
class CorsConfig {
    @Bean
    fun corsFilter(): Filter {
        return object : Filter {
            @Throws(ServletException::class)
            override fun init(filterConfig: FilterConfig) {}

            override fun doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: FilterChain) {
                val res = response as HttpServletResponse
                res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")
                res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type")
                res.setHeader("Access-Control-Allow-Credentials", "true")
                chain.doFilter(request, response)
            }

            override fun destroy() {}
        }
    }
}
