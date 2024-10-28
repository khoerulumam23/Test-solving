SELECT customer_id, COUNT(*) AS total_penjualan
FROM your_table_name
GROUP BY customer_id
ORDER BY COUNT(*) DESC, customer_id ASC;