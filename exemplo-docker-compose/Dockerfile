FROM  ubuntu:latest
LABEL maintainer="Jackson Pires"

# Atualiza o SO
RUN apt-get update
RUN apt-get install -y openssh-server vim curl
RUN mkdir /var/run/sshd

# Configura o SSH
RUN echo 'root:root' |chpasswd
RUN sed -ri 's/^PermitRootLogin\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config
RUN echo 'Banner /etc/banner' >> /etc/ssh/sshd_config
COPY etc/banner /etc/

# Adciona o usuário 'app'
RUN useradd -ms /bin/bash app
RUN adduser app sudo
RUN echo 'app:app' |chpasswd

# Altera para o usuário 'app'
USER app

# Instala o NVM
RUN /bin/bash -l -c "curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash"
RUN /bin/bash -l -c ". ~/.nvm/nvm.sh && nvm install 9.11"

# Altera para o usuário 'root'
USER root

# Expõe as portas
EXPOSE 22
EXPOSE 3090

# Cria e configura o ponto de montagem do volume
RUN mkdir /workspace
RUN chmod 777 /workspace
VOLUME /workspace

CMD    ["/usr/sbin/sshd", "-D"]