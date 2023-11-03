# Use the official PostgreSQL image as the base image
FROM postgres:15 

# Environment variables to configure the database
ENV PG_USER=postgres
ENV PG_PASSWORD=12345678
ENV PG_DB=Test

# Expose the PostgreSQL port
EXPOSE 5432

# Start the PostgreSQL server
CMD ["postgres"]
