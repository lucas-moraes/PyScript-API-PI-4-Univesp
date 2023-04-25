import pandas as pd

def generate_sex_data(df):
    sx = pd.DataFrame(df, columns=['SEXO'])
    sx = sx.groupby('SEXO')['SEXO'].count()
    return sx.to_json()