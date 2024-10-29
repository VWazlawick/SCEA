package br.unipar.scea_api.models;

import br.unipar.scea_api.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig{


//    @Bean
//    public UserDetailsService userDetailsService(){
//        UserDetails user = User.builder().username("username").password(passwordEncoder().encode("password")).roles("USER").build();
//        return new InMemoryUserDetailsManager(user);
//    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider(UsuarioService usuarioService, BCryptPasswordEncoder bCryptPasswordEncoder){
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(usuarioService);
        authProvider.setPasswordEncoder(bCryptPasswordEncoder);
        return authProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(authorize ->
                authorize.requestMatchers("/login", "/styles/**", "/css/**", "/scripts/**", "/images/**").
                        permitAll().anyRequest().authenticated()
        ).formLogin(form -> form.loginPage("/login").defaultSuccessUrl("/home", true).permitAll()
        ).logout(logout -> logout.logoutUrl("/logout").logoutSuccessUrl("/login?logout").permitAll());

        return http.build();
    }


}
