<h2>Daftar Genre</h2>
<ul>
    @foreach($genres as $genre)
        <li>{{ $genre['name'] }}</li>
    @endforeach
</ul>
